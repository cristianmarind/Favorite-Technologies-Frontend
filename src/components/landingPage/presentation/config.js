import background_image_sm from "../../../assets/Woloxer/img_woloxer.png"
import background_image_md from "../../../assets/Woloxer/img_woloxer@2x.png"
import background_image_lg from "../../../assets/Woloxer/img_woloxer@3x.png"
import twitter_logo from "../../../assets/externalCompanies/twitterLogo.png"


export const SECTION_TYPES = {
  SOCIAL_NETWORKS: 'socialNetworks',
  TEXT: 'text'
}

export const SECTION_ACTIONS_TYPES = {
  LINK: 'link'
}

export const GREETING_CONF = {
  sections: [
    {
      type: SECTION_TYPES.SOCIAL_NETWORKS,
      backgroundImage: {
        sm: background_image_sm,
        md: background_image_md,
        lg: background_image_lg
      },
      titleHtml: '<span><b><span class="text-primary-b">350 + </span><span class="text-primary-b">Woloxers</span></b></span>',
      networks: [{
        logo: twitter_logo,
        label: '@Wolox'
      }],
      action: {
        type: SECTION_ACTIONS_TYPES.LINK,
        link: 'https://twitter.com/Wolox',
        style: 'button-primary-a-outline',
        label: 'Siguenos'
      }
    },
    {
      type: SECTION_TYPES.TEXT,
      textHtml: '<span>Trabajamos para <span class="text-primary-a">convertir </span><span class="text-primary-a">ideas </span>en productos.</span>'
    }
  ]
}