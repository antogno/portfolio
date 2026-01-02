export const isValidHexColor = (value: string) => {
	return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value);
};

export const hexToRgba = (hex: string, alpha: number) => {
	let h = hex.replace('#', '').trim();

	if (h.length === 3) {
		h = h
			.split('')
			.map((c) => c + c)
			.join('');
	}

	const r = parseInt(h.slice(0, 2), 16);
	const g = parseInt(h.slice(2, 4), 16);
	const b = parseInt(h.slice(4, 6), 16);

	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
