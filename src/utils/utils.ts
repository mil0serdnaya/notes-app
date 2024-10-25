export const toggleBodyScroll = (disableScroll: boolean) => {
  if (disableScroll) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
};