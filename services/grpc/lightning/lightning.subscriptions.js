import { grpcLog } from '@zap/utils/log'
import { status } from '@grpc/grpc-js'

/**
 * Call lnd grpc subscribeChannelGraph method and emit events on updates to the stream
 * @return {Call} Grpc Call
 */
function subscribeChannelGraph() {
  const call = this.service.subscribeChannelGraph({})
  call.on('data', data => {
    grpcLog.info('CHANNELGRAPH DATA: %o', data)
    this.emit('subscribeChannelGraph.data', data)
  })
  call.on('error', error => {
    if (error.code !== status.CANCELLED) {
      grpcLog.error('CHANNELGRAPH ERROR: %o', error)
      this.emit('subscribeChannelGraph.error', error)
    }
  })
  call.on('status', status => {
    grpcLog.info('CHANNELGRAPH STATUS: %o', status)
    this.emit('subscribeChannelGraph.status', status)
  })
  call.on('end', () => {
    grpcLog.info('CHANNELGRAPH END')
    this.emit('subscribeChannelGraph.end')
  })
  return call
}

/**
 * Call lnd grpc subscribeInvoices method and emit events on updates to the stream
 * @return {Call} Grpc Call
 */
function subscribeInvoices(payload = {}) {
  const call = this.service.subscribeInvoices(payload)
  call.on('data', data => {
    grpcLog.info('INVOICES DATA: %o', data)
    this.emit('subscribeInvoices.data', data)
  })
  call.on('error', error => {
    if (error.code !== status.CANCELLED) {
      grpcLog.error('INVOICES ERROR: %o', error)
      this.emit('subscribeInvoices.error', error)
    }
  })
  call.on('status', status => {
    grpcLog.info('INVOICES STATUS: %o', status)
    this.emit('subscribeInvoices.status', status)
  })
  call.on('end', () => {
    grpcLog.info('INVOICES END')
    this.emit('subscribeInvoices.end')
  })
  return call
}

/**
 * Call lnd grpc subscribeTransactions method and emit events on updates to the stream
 * @return {Call} Grpc Call
 */
function subscribeTransactions() {
  const call = this.service.subscribeTransactions({})
  call.on('data', data => {
    grpcLog.info('TRANSACTIONS DATA: %o', data)
    this.emit('subscribeTransactions.data', data)
  })
  call.on('error', error => {
    if (error.code !== status.CANCELLED) {
      grpcLog.error('TRANSACTIONS ERROR: %o', error)
      this.emit('subscribeTransactions.error', error)
    }
  })
  call.on('status', status => {
    grpcLog.info('TRANSACTIONS STATUS: %o', status)
    this.emit('subscribeTransactions.status', status)
  })
  call.on('end', () => {
    grpcLog.info('TRANSACTIONS END')
    this.emit('subscribeTransactions.end')
  })
  return call
}

export default {
  subscribeChannelGraph,
  subscribeInvoices,
  subscribeTransactions,
}
