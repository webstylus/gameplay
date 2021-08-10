/**
 * https://discord.com/api/oauth2/authorize
 * ?client_id=
 * &redirect_uri=
 * &response_type=
 * &scope=
 */
const REDIRECT_URI = 'https://auth.expo.io/@webstylus/gameplay'
const SCOPE = 'identify%20email%20connections%20guilds'
const RESPONSE_TYPE = 'token'
const CLIENT_ID = '874413461210280076'
const CDN_IMAGE = 'https://cdn.discordapp.com'

export {
  REDIRECT_URI,
  SCOPE,
  RESPONSE_TYPE,
  CLIENT_ID,
  CDN_IMAGE
}
