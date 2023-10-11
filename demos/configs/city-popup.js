export default function (properties) {
  const content = document.createElement('div');
  content.style.whiteSpace = 'nowrap';
  content.style.fontWeight = 'bold';
  content.style.textAlign = 'center';

  // Quacks like a duck
  if (properties.pretty_address) {
    content.textContent = properties.pretty_address;
  } else if (properties.apn) {
    content.textContent = 'APN ' + properties.apn;
  }

  return content;
}