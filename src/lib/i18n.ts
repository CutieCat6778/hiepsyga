import { get, derived, writable } from 'svelte/store';
import { addMessages, locale, init, dictionary, _, getLocaleFromNavigator } from 'svelte-i18n';
import { onMount } from 'svelte';

const MESSAGE_FILE_URL_TEMPLATE = '/locales/{locale}.json';

interface I18nOptions {
	withLocale: string;
}

let _activeLocale: string;

const isDownloading = writable(false);

async function setupI18n(options: I18nOptions): Promise<void> {
	const { withLocale: locale_ } = options;

	init({ initialLocale: getLocaleFromNavigator(), fallbackLocale: locale_ || 'en' });

	if (!hasLoadedLocale(locale_)) {
		isDownloading.set(true);

		const messagesFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace('{locale}', locale_);

		onMount(async () => {
			try {
				const messages = await loadJson<Record<string, string>>(messagesFileUrl);
				addMessages(locale_, messages);
				_activeLocale = locale_;
				locale.set(locale_);
			} catch (error) {
				console.error('Failed to load translations:', error);
			} finally {
				isDownloading.set(false);
			}
		});
	}
}

function changeLocale(locale_: string): void {
	if (!hasLoadedLocale(locale_)) {
		isDownloading.set(true);

		const messagesFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace('{locale}', locale_);

		try {
			loadJson<Record<string, string>>(messagesFileUrl).then(messages => {
				addMessages(locale_, messages);
				_activeLocale = locale_;
				locale.set(locale_);
			})
		} catch (error) {
			console.error('Failed to load translations:', error);
		} finally {
			isDownloading.set(false);
		}
		return;
	}

	locale.set(locale_);
}

const isLocaleLoaded = derived(
	[isDownloading, dictionary],
	([$isDownloading, $dictionary]) =>
		!$isDownloading &&
		$dictionary[_activeLocale] &&
		Object.keys($dictionary[_activeLocale]).length > 0
);

async function loadJson<T>(url: string): Promise<T> {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Failed to load JSON from ${url}`);
	}
	return response.json();
}

function hasLoadedLocale(locale: string): boolean {
	return !!get(dictionary)[locale];
}

export { _, setupI18n, isLocaleLoaded, locale, changeLocale };