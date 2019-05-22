import * as actions from '../actions/actions';

const initialState = {
  siteTitle: "MdolHub",
  languages: {
    shortNames: [
      {
        name:  "pl",
        icon: "🇵🇱"
      },
      {
        name:  "en",
        icon: "🇬🇧"
      },
      {
        name:  "ru",
        icon: "🇷🇺"
      }
    ],
    en: {
      languageName: "English",
      languageShort: "en",
      phrases: {
        all: {
          headerTopBookmarks: [
            {
              name: "Home",
              path: ""
            },
            {
              name: "Premium",
              path: "/premium"
            },
            {
              name: "ModelHub",
              path: "/models"
            },
            {
              name: "Shop",
              path: "/shop"
            },
            {
              name: "Toys",
              path: "/toys"
            },
            {
              name: "Sexual wellness",
              path: "/wellness"
            },
            {
              name: "Insights",
              path: "/insights"
            },
            {
              name: "Sites",
              path: "/sites"
            }
          ],
          headerBookmarks: [{
              id: 1,
              name: "Home",
              path: "" //dont change it
            },
            {
              id: 2,
              name: "Contact",
              path: "/contact" //dont change it
            },
          ],
          footerNoCopyText: "All rights reserved"
        }
      },
    }
  },
  loading: {
    show: false,
    text: null,
    messages: []
  },
  // keys: {
  //   google_api: "AIzaSyAIrrXJz2xujOoMQesJVMfLvGISs2TKlsA",
  //   fb_app_ID: "639948346452813"
  // },
  // docs: {
  //   rules: {
  //     update: null,
  //     uri: "/docs/rules.md"
  //   },
  //   privacyPolicy: {
  //     update: null,
  //     uri: "/docs/privacyPolicy.md"
  //   },
  // },
  notifications: []
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    // case actions.FETCH_PRIMARY_DATA_BEGIN:
    //   return {
    //     ...state,
    //     primary_data: {
    //       ...state.primary_data,
    //       loading: true,
    //       error: false
    //     }
    //   };

    default:

      return state;
  }
}