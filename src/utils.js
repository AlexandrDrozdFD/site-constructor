//for pure functions that depend on passed param

export function row(content, styles = '') {
  return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`
}

export function css(styles = {}) {
  // const keys = Object.keys(styles);
  // const array = keys.map((key) => {
  //   return `${key}: ${styles[key]}`
  // });
  // console.log(array)
  // return array.join(';')

  //   /\
  //   ||
  //   ||    optimize
  //   ||
  //   \/

  const toString = (key) => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(toString).join(';');
}

export function block(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" style="margin-bottom: 13px" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" style="margin-bottom: 13px" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Add</button>
    </form>
    <hr/>
  `
}