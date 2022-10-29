const SET_PROJECT_DATA = "SET_PROJECT_DATA"


const defaultState = {
  id: 0,
  data: {
    "name": "",
    "short_description": "",
    "full_description": "",
    "cover_images_base64": [],
    "project_category_id": '',
    "is_project_global": true,
    "project_geo": "",
    "is_fundraising_limited": true,
    "fundraising_days_limit": '',
    "fundraising_ton_goal": '',
    "awards": [],
    "contact_name": "",
    "contact_email": "",
    "contact_tg": "",
    "fundraising_ton_address": "",
    "authorization_ton_address": "",
  },
  isFetching: false,
}

export default function projectReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_PROJECT_DATA:
      return {...state, data: action.payload}
    default:
      return state
  }
}

export const setProject = (data) => ({type: SET_PROJECT_DATA, payload: data})