
export const generateRobokassaFormUrl = (invoiceId: string, cost: string, hash: string) =>   `
    https://auth.robokassa.ru/Merchant/PaymentForm/FormSS.if
    MerchantLogin=kiosk.magmetall.ru&
    InvoiceID=${invoiceId}&
    Culture=ru&
    Encoding=utf-8&
    OutSum=${cost}&
    SignatureValue=${hash}
`.replaceAll(' ', '')
