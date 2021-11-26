import { computed } from '@nuxtjs/composition-api'
import { useBreakpoints as useBreakpointsCore } from '@vueuse/core'

export const useBreakpoints = () => {
  const breakpoints = useBreakpointsCore({
    mobile: 768,
    tablet: 1023,
    desktop: 1215,
    widescreen: 1407,
  })

  const isMobile = breakpoints.smaller('mobile')
  const isTablet = breakpoints.between('mobile', 'tablet')
  const isDesktop = breakpoints.between('tablet', 'desktop')
  const isWideScreen = breakpoints.between('desktop', 'widescreen')
  const isFullHD = breakpoints.greater('widescreen')
  const isTouch = computed(() => isMobile.value || isTablet.value)
  const isNotTouch = computed(
    () => isDesktop.value || isWideScreen.value || isFullHD.value
  )

  return {
    isMobile,
    isTablet,
    isDesktop,
    isWideScreen,
    isFullHD,
    isTouch,
    isNotTouch,
  }
}
