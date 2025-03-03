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

export const AVAILABLE_PAYMENT_METHODS = [
    {
        name: 'Paypal',
        commission: 0,
        isDefault: true,
    },
    {
        name: 'Stripe',
        commission: 0,
        isDefault: true
    },
    {
        name: 'Cash On Delivery',
        commission: 0,
        isDefault: true
    }
]

export const DEFAULT_PAYMENT_METHOD = 
    process.env.DEFAULT_PAYMENT_METHOD || 'Paypal'

export const AVAILABLE_DELIVERY_DATES = [
    {
        name: 'Tomorrow',
        daysToDeliver: 1,
        shippingPrice: 12.9,
        freeShippingMinPrice: 0,
    },
    {
        name: 'Next 3 days',
        daysToDeliver: 3,
        shippingPrice: 12.9,
        freeShippingMinPrice: 0,
    },
    {
        name: 'Next 5 days',
        daysToDeliver: 5,
        shippingPrice: 4.9,
        freeShippingMinPrice: 35,
    }
]

