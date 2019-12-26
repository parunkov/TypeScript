window.addEventListener('load', (windowLoadEvt) => {
	windowLoadEvt.preventDefault();
	const toggle: HTMLElement = document.querySelector('.ts-slider__toggle');
	const range: HTMLElement = document.querySelector('.ts-slider__range');
	const bar: HTMLElement = document.querySelector('.ts-slider__bar');
	const container: HTMLElement = document.querySelector('.ts-slider__container');
	const barWidth = bar.offsetWidth;
	const onMouseDown = (evt) => {
		evt.preventDefault();
		let startCoordX: number = evt.clientX;
		console.log(startCoordX);
		let toggleLeft: number;

		const onMouseMove = (moveEvt) => {
			moveEvt.preventDefault();
			let shift: number = startCoordX - moveEvt.clientX;
			startCoordX = moveEvt.clientX;
			toggleLeft = toggle.offsetLeft - shift;
			if (toggleLeft < 0) {
				toggleLeft = 0;
			} else if (toggleLeft > barWidth) {
				toggleLeft = barWidth;
			} 
			toggle.style.left = `${toggleLeft}px`;
			range.style.width = `${toggleLeft}px`;
			console.log(toggleLeft);
		}
		const onMouseUp = (upEvt) => {
				upEvt.preventDefault();
				document.removeEventListener('mouseup', onMouseUp);
				document.removeEventListener('mousemove', onMouseMove);
			}
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
	}
	toggle.addEventListener('mousedown', onMouseDown);
});