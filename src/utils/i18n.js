import i18n from 'i18next';

/**
 * Get language from URL path
 * @param {string} path - Current URL path
 * @returns {string} Language code ('cs' or 'en')
 */
export const getLanguageFromPath = (path) => {
  const pathParts = path.split('/').filter(Boolean);
  return pathParts[0] === 'en' ? 'en' : 'cs';
};

/**
 * Check if language is supported
 * @param {string} lang - Language code to check
 * @returns {boolean} Whether the language is supported
 */
export const isLanguageSupported = (lang) => {
  return ['cs', 'en'].includes(lang);
};

/**
 * Get fallback language
 * @param {string} lang - Current language
 * @returns {string} Fallback language code
 */
export const getFallbackLanguage = (lang) => {
  return isLanguageSupported(lang) ? lang : 'cs';
};

/**
 * Get localized path
 * @param {string} path - Current path
 * @param {string} lang - Target language
 * @returns {string} Localized path
 */
export const getLocalizedPath = (path, lang) => {
  const pathParts = path.split('/').filter(Boolean);
  if (pathParts[0] === 'en' || pathParts[0] === 'cs') {
    pathParts[0] = lang;
  } else {
    pathParts.unshift(lang);
  }
  return '/' + pathParts.join('/');
};

/**
 * Get alternate language path
 * @param {string} path - Current path
 * @returns {string} Path in alternate language
 */
export const getAlternateLanguagePath = (path) => {
  const currentLang = getLanguageFromPath(path);
  const targetLang = currentLang === 'cs' ? 'en' : 'cs';
  return getLocalizedPath(path, targetLang);
};

/**
 * Change language and update URL
 * @param {string} lang - Target language
 * @param {Function} navigate - Navigation function
 */
export const changeLanguage = (lang, navigate) => {
  if (isLanguageSupported(lang)) {
    i18n.changeLanguage(lang);
    const currentPath = window.location.pathname;
    const newPath = getLocalizedPath(currentPath, lang);
    navigate(newPath);
  }
}; 