// @flow
// Imports {{{

import {action, extendObservable} from 'mobx'

import remotedev from 'mobx-remotedev'

// }}}

export class Counter {
  value: number

  constructor() {
    extendObservable(this, {
      value: 0,
    })
  }

  /* --- Actions --- */

  increase = action('increase', () => {
    this.value++
  })
}

export default remotedev(new Counter())
