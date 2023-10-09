export default function (properties) {
  if (properties.layer === 'city.addresses') {
    const content = document.createElement('div');
    content.style.whiteSpace = 'nowrap';
    content.textContent = properties.pretty_address;
    return content;
  } else {
    return document.createElement('div');
  }
}