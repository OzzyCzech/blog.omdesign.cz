const {promisify} = require('util');
const fs = require('fs');
const {dirname, extname, basename} = require('path');
const readFile = promisify(fs.readFile);

/**
 * Return {page} object
 * @param file
 * @param extenders
 * @returns {Promise<*>}
 */
module.exports = async (file, ...extenders) => {
	let ext = extname(file);
	let content = await readFile(file, 'utf8');

	let page = {
		file: file,
		dir: dirname(file),
		ext: ext,
		base: basename(file, ext),
		content: content,
	};

	return Object.assign(
			page,
			...extenders.map(f => typeof f === 'function' ? f(page) : f)
	);
};