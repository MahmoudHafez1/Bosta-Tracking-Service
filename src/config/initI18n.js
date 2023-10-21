import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      Search: 'Search',
      Bosta: 'Bosta',
      'Sign In': 'Sign In',
      Home: 'Home',
      Prices: 'Prices',
      'Call Sales': 'Call Sales',
      'Track Shipment': 'Track Shipment',
      'Track Your Shipment': 'Track Your Shipment',
      CANCELLED: 'Cancelled',
      DELIVERED: 'Delivered',
      DELIVERED_TO_SENDER: 'Returned to the shipper',
      'Shipment created': 'Shipment created',
      'Shipment recieved from the provider':
        'Shipment recieved from the provider',
      'Shipment out for delivery': 'Shipment out for delivery',
      Delivered: 'Delivered',
      'Deliver Date': 'Deliver Date',
      'Provider Name': 'Provider Name',
      'last Update': 'last Update',
      'Shipment No.': 'Shipment No.',
      'Shipment Details': 'Shipment Details',
      'Delivery Address': 'Delivery Address',
      Location: 'Location',
      Date: 'Date',
      Time: 'Time',
      Details: 'Details',
      TICKET_CREATED: 'Shipment is created',
      PACKAGE_RECEIVED: 'Shipment is received',
      IN_TRANSIT: 'In transit',
      NOT_YET_SHIPPED: 'Not yet shipped',
      OUT_FOR_DELIVERY: 'Out for delivery',
      WAITING_FOR_CUSTOMER_ACTION: 'Waiting for customer action',
      'Is there a problem with your shipment ?!':
        'Is there a problem with your shipment ?!',
      'Report a problem': 'Report a problem',
      'No record of this tracking number can be found at this time, please check the number and try again later. For further assistance, please contact Customer Service.':
        'No record of this tracking number can be found at this time, please check the number and try again later. For further assistance, please contact Customer Service.',
      'Please enter your tracking number by clicking track shipment button above':
        'Please type your tracking number by clicking track shipment button above',
    },
  },
  ar: {
    translation: {
      Search: 'بحث',
      Bosta: 'بوسطة',
      'Sign In': 'تسجيل دخول',
      Home: 'الرئيسية',
      Prices: 'الأسعار',
      'Call Sales': 'كلم المبيعات',
      'Track Shipment': 'تتبع شحنتك',
      'Track Your Shipment': 'تتبع شحنتك',
      CANCELLED: 'تم إلغاء الشحنة',
      DELIVERED: 'تم تسليم الشحنة',
      DELIVERED_TO_SENDER: 'تم ارجاع الشحنة للتاجر',
      'Shipment created': 'تم إنشاء الشحنة',
      'Shipment recieved from the provider': 'تم استلام الشحنة من التاجر',
      'Shipment out for delivery': 'الشحنة خرجت للتسليم',
      Delivered: 'تم التسليم',
      'Deliver Date': 'تاريخ الاستلام',
      'Provider Name': 'اسم التاجر',
      'last Update': 'اخر تحديث',
      'Shipment No.': 'رقم الشحنة',
      'Shipment Details': 'تفاصيل الشحنة',
      'Delivery Address': 'عنوان التوصيل',
      Location: 'الفرع',
      Date: 'التاريخ',
      Time: 'الوقت',
      Details: 'التفاصيل',
      TICKET_CREATED: 'تم إنشاء الشحنة',
      PACKAGE_RECEIVED: 'تم استلام الشحنة من التاجر',
      IN_TRANSIT: 'في مرحلة الانتقال',
      NOT_YET_SHIPPED: 'لم يتم شحنه بعد',
      OUT_FOR_DELIVERY: 'الشحنة خرجت للتسليم',
      WAITING_FOR_CUSTOMER_ACTION: 'في انتظار قرار العميل',
      'Is there a problem with your shipment ?!': 'هل يوجد مشكلة في شحنتك ؟!',
      'Report a problem': 'ابلغ عن مشكلة',
      'No record of this tracking number can be found at this time, please check the number and try again later. For further assistance, please contact Customer Service.':
        'لا يمكن العثور على سجل لرقم التتبع هذا في الوقت الحالي، يرجى التحقق من الرقم والمحاولة مرة أخرى لاحقًا. لمزيد من المساعدة، يرجى الاتصال بخدمة العملاء.',
      'Please enter your tracking number by clicking track shipment button above':
        'الرجاء إدخال رقم التتبع الخاص بك عن طريق النقر على زر تتبع شحنتك أعلاه',
    },
  },
}

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'ar',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
