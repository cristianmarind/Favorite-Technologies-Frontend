import background_image_sm from "../../../assets/Woloxer/img_woloxer.png"
import background_image_md from "../../../assets/Woloxer/img_woloxer@2x.png"
import background_image_lg from "../../../assets/Woloxer/img_woloxer@3x.png"
import twitter_logo from "../../../assets/externalCompanies/twitterLogo.png"


export const PRESENTATION_CONF = {
  socialNetworks: {
    backgroundImage: {
      sm: background_image_sm,
      md: background_image_md,
      lg: background_image_lg
    },
    titleHtml: '<span><b><span class="text-primary-b">350 + </span><span class="text-primary-a">Woloxers</span></b></span>',
    networks: [{
      logo: twitter_logo,
      label: '@Wolox'
    }],
    action: {
      link: 'https://twitter.com/Wolox',
      style: 'btn-primary-a-outline',
      label: 'Siguenos'
    }
  },
  text: {
    textHtml: '<span>Trabajamos para <b><span class="text-primary-a">convertir </span><span class="text-primary-b">ideas </span></b>en productos.</span>'
  }
}