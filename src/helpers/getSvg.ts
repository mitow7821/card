export function getCircleSvg(currentValue: number, totalValue: number) {
  const progress = totalValue && (currentValue * 490) / totalValue;

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 216.1 188.4" enable-background="new 0 14 216.1 188.4" xml:space="preserve">
	<path fill="none" stroke="#dfe3e9" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M 177.5, 181.4   c 19.4-18.4, 31.5-44.5, 31.5-73.3   c 0-55.8-45.2-101-101-101   S 7,52.2,7,108   c 0,28.9,12.1,54.9,31.5,73.3">
	</path>
	<path fill="none" stroke="#4990e2" stroke-offset="0.1" stroke-dasharray="${progress.toFixed(
    1
  )}, 490" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M 177.5, 181.4   c 19.4-18.4, 31.5-44.5, 31.5-73.3   c 0-55.8-45.2-101-101-101   S 7,52.2,7,108   c 0,28.9,12.1,54.9,31.5,73.3">
	</path>
</svg>`;
}
