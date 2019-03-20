import dayjs from 'dayjs';

export function store(today, product) {
  const statusOn = '上架';
  const statusOff = '下架';
  const launchImmediatelyOrReservation = '立即上架或預約上架';
  const launchCancelReservation = '取消預約上架';
  const discontinueImmediatelyOrReservation = '立即下架或預約下架';
  const discontinueCancelReservation = '取消預約下架';
  const soldOut = '已售罄無法進行上架';
  const now = dayjs(today);
  const launched = dayjs(product.launched);
  const discontinued = dayjs(product.discontinued);
  var status, operate;

  if (launched.isValid()) {
    if (launched.isAfter(now)) {
      status = statusOff;
    } else {
      if (discontinued.isValid()) {
        status = discontinued.isAfter(now) ? statusOn : statusOff;
      } else {
        status = statusOn;
      }
    }
  } else {
    status = statusOff;
  }


  if (product.amount == 0) {
    operate = soldOut;
  } else {
    if (status == statusOn) {
      operate = discontinueImmediatelyOrReservation;

      if (discontinued.isAfter(now)) {
        operate = discontinueCancelReservation;
      }
    } else {
      operate = launchImmediatelyOrReservation;

      if (launched.isAfter(now)) {
        operate = launchCancelReservation;
      }
    }
  }

  return {
    status,
    operate
  };
}