export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Jowagu'
export const APP_SLOGAN=
    process.env.NEXT_PUBLIC_APP_SLOGAN ||'Spend less, enjoy more'
export const APP_DESCRIPTION =
    process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Next js App'

export const APP_COPYRIGHT =
    process.env.NEXT_PUBLIC_APP_COPYRIGHT || 
    `Copyright © ${new Date().getFullYear()} ${APP_NAME}. All rights reserved`

export const PAGE_SIZE = Number(process.env.NEXT_PUBLIC_PAGE_SIZE || 9)

export const FREE_SHIPPING_MIN_PRICE = Number(
  process.env.FREE_SHIPPING_MIN_PRICE || 35
)

