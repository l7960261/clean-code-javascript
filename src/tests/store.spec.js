import {
  store
} from '../domains/store';

const today = '2019/04/30 00:00:00';
const statusOn = '上架';
const statusOff = '下架';
const launchImmediatelyOrReservation = '立即上架或預約上架';
const launchCancelReservation = '取消預約上架';
const discontinueImmediatelyOrReservation = '立即下架或預約下架';
const discontinueCancelReservation = '取消預約下架';
const soldOut = '已售罄無法進行上架';

test('situation 1', () => {
  const product = {
    launched: '',
    discontinued: '',
    amount: 1
  };

  const actual = store(today, product);
  const status = actual.status;
  const operate = actual.operate;

  expect(status).toBe(statusOff);
  expect(operate).toBe(launchImmediatelyOrReservation);
});

test('situation 2', () => {
  const product = {
    launched: '2019/04/29 00:00:00',
    discontinued: '',
    amount: 1
  };

  const actual = store(today, product);
  const status = actual.status;
  const operate = actual.operate;

  expect(status).toBe(statusOn);
  expect(operate).toBe(discontinueImmediatelyOrReservation);
});

test('situation 3', () => {
  const product = {
    launched: '2019/04/29 00:00:00',
    discontinued: '2019/04/30 12:00:00',
    amount: 1
  };

  const actual = store(today, product);
  const status = actual.status;
  const operate = actual.operate;

  expect(status).toBe(statusOn);
  expect(operate).toBe(discontinueCancelReservation);
});

test('situation 4', () => {
  const product = {
    launched: '2019/04/30 12:00:00',
    discontinued: '',
    amount: 1
  };

  const actual = store(today, product);
  const status = actual.status;
  const operate = actual.operate;

  expect(status).toBe(statusOff);
  expect(operate).toBe(launchCancelReservation);
});

test('situation 5', () => {
  const product = {
    launched: '2019/04/27 00:00:00',
    discontinued: '2019/04/27 00:00:00',
    amount: 1
  };

  const actual = store(today, product);
  const status = actual.status;
  const operate = actual.operate;

  expect(status).toBe(statusOff);
  expect(operate).toBe(launchImmediatelyOrReservation);
});

test('situation 6', () => {
  const product = {
    launched: '2019/04/27 00:00:00',
    discontinued: '2019/04/27 00:00:00',
    amount: 0
  };

  const actual = store(today, product);
  const status = actual.status;
  const operate = actual.operate;

  expect(status).toBe(statusOff);
  expect(operate).toBe(soldOut);
});