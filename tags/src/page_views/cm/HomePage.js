export default function HomePage() {
	  if (window.nord && nord.config && nord.config.settings && nord.config.settings.analytics) {
		cmCreatePageviewTag(nord.config.settings.analytics.pageId.replace(/\'/g, ""), nord.config.settings.analytics.categoryPath, null, null, '-_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_-' + (document.querySelector('#customer-greeting') && document.querySelector('#customer-greeting').textContent !== 'Sign In' ? 'Y' : 'N'));
	  }
}