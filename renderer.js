const noise = () => {
	const canvas = document.querySelector('canvas'),
		ctx = canvas.getContext('2d');

	const resize = () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight; 
	};
	resize();
	window.onresize = resize;

	const createNoise = (ctx) => {
		const w = ctx.canvas.width,
			h = ctx.canvas.height,
			iData = ctx.createImageData(w, h),
			buffer32 = new Uint32Array(iData.data.buffer),
			len = buffer32.length;

		for (let i = 0; i < len; i++)
			if (Math.random() < 0.5) buffer32[i] = 0xffffffff;
		ctx.putImageData(iData, 0, 0);
	};

	const loop = () => {
		createNoise(ctx);
		requestAnimationFrame(loop);
	};
	loop();
};

noise();