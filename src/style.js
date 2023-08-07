const styles = {
  boxWidth: 'xl:max-w-[1280px] w-full',

  heading3:
    'font-poppins font-semibold xs:text-[38px] text-[22px] text-dimForest xs:leading-[76.8px] leading-[66.8px] w-full',

  heading2:
    'font-poppins font-semibold xs:text-[48px] text-[40px] text-dimForest xs:leading-[76.8px] leading-[66.8px] w-full',
  paragraph: 'font-poppins font-normal  text-[18px] leading-[30.8px]',

  headingTitle2:
    'font-poppins font-semibold xs:text-[128px] text-[190px] text-white xs:leading-[86.8px] leading-[86.8px] w-full',

  headingTitle:
    'font-poppins font-semibold xs:text-[68px] text-[60px] text-white xs:leading-[86.8px] leading-[86.8px] w-full',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',

  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-6',
  padding: 'sm:px-16 px-6 sm:py-12 py-4',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',

  imgCard:
    'cursor-pointer w-full transition-transform  duration-300 ease-in-out transform-gpu group-hover:scale-105',

  hero: '',
}

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  serviceSection: `flex sm:flex-row flex-col sm:px-4 px-2 items-center`,
  serviceSectionReverse: `flex md:flex-row-reverse flex-col items-center ${styles.paddingY}`,
  serviceSectionImg: ` w-1/3`,
  serviceSectionInfo: `w-2/3`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
}

export const product_layout = {
  section: `flex md:flex-row flex-col p-[16px]`,
  sectionInfo: `flex-none w-14 h-14`,
  sectionInfo2: `flex-initial w-96`,
}

export default styles
