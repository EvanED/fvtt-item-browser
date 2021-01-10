export const preloadTemplates = async function() {
	const templatePaths = [
		// Add paths to "modules/fvtt-item-browser/templates"
	];

	return loadTemplates(templatePaths);
}
