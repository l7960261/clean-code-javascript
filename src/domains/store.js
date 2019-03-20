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

  return {
    status,
    operate
  };
}