import { load as loadYaml } from 'js-yaml';

export default function (config) {
  if (typeof config === 'string') {
    return loadRemoteConfig(config);
  } else if (typeof config === 'object') {
    return Promise.resolve(config);
  } else {
    return Promise.reject(new Error('Invalid config format'));
  }
}

async function loadRemoteConfig(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch config from ${url}`);
    }

    const contentType = response.headers.get('content-type');
    if (contentType.includes('json')) {
      return response.json();
    } else if (contentType.includes('yaml')) {
      const yamlText = await response.text();
      return loadYaml(yamlText);
    } else {
      throw new Error(`Unsupported content type: ${contentType}`);
    }
  } catch (error) {
    throw new Error(`Error fetching or parsing remote config: ${error.message}`);
  }
}

