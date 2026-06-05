// ENGINE KECIL KECILAN BY ICAN.
// INI YG BUAT KODINGAN GUA BISA ADA COMPONENT.

/**
 * Buat nyimpen cache component.
 */
const componentCache = {};

/**
 * Buat load component
 * @param {string} name
 * @returns
 */
async function loadComponent(name) {
  if (componentCache[name]) {
    return componentCache[name];
  }

  const file = await fetch(`./components/${name}.comp`).then((r) => r.text());
  const template = file.match(/<template>([\s\S]*?)<\/template>/)?.[1];

  const script = file.match(/<script>([\s\S]*?)<\/script>/)?.[1];
  if (!script) throw new Error(`Component ${name} tidak ada export default`);
  const component = new Function(script.replace("export default", "return"))();
  console.log(component);
  componentCache[name] = {
    template,
    component,
  };
  return componentCache[name];
}

/**
 * Buat replace jika ada tanda {{ apapun }} di html, ganti jadi span dan mempunyai data-bind
 * @param {HTMLElement} template
 * @returns
 */
function compileTemplate(template) {
  return template.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, key) => {
    return `<span data-bind="${key}"></span>`;
  });
}

/**
 * Buat mount component, ini kunci nya biar bisa pake component.
 * @param {Element} el
 * @param {string} name
 */
async function mount(el, name) {
  const { template, component } = await loadComponent(name);
  const bindings = {};
  function update(key) {
    const nodes = bindings[key];
    if (!nodes) return;
    nodes.forEach((node) => {
      node.textContent = state[key];
    });
  }
  const state = new Proxy(component.state || {}, {
    set(target, key, value) {
      target[key] = value;
      update(key);
      return true;
    },
  });
  const methods = {};
  for (const key in component) {
    if (typeof component[key] === "function") {
      methods[key] = component[key].bind(state);
    }
  }
  const templateEl = document.createElement("template");
  templateEl.innerHTML = compileTemplate(template);
  const fragment = templateEl.content.cloneNode(true);
  el.replaceWith(fragment);
  el.querySelectorAll("[data-bind]").forEach((node) => {
    const key = node.dataset.bind;
    if (!bindings[key]) {
      bindings[key] = [];
    }
    bindings[key].push(node);
    node.textContent = state[key] ?? "";
  });
  el.querySelectorAll("*").forEach((node) => {
    [...node.attributes].forEach((attr) => {
      if (attr.name === "@click") {
        const fn = methods[attr.value];
        if (fn) {
          node.addEventListener("click", fn);
        }
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const components = document.querySelectorAll("[data-component]");
  for (const el of components) {
    await mount(el, el.dataset.component);
  }
  //kasih tau ke seluruh kode javascript kalo misalnya engine gua udh ready
  document.dispatchEvent(new Event("engine:ready"));
});
