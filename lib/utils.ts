export namespace Utils {
  export namespace Arrays {
    /**
     * It creates an array of a given size, fills it with a given filler, and returns the array
     * @param {number} size - number - The size of the array you want to create
     * @param {T | (() => T)} filler - T | (() => T)
     * @returns An array of size `size` filled with `filler`
     */
    export const fill = <T>(size: number, filler: T | (() => T)) => {
      let arr = new Array<T>(size).fill({} as T)
      return filler instanceof Function
        ? arr.map(e => filler())
        : arr.map(e => filler)
    }

  /**
    * `choice` is a function that takes an array of items and returns a random item from that array
    * @param {T[]} items - T[] - The array of items to choose from.
    * @returns a random item from the array.
    */
    export const choice = <T = any>(items: T[]) => {
      return items[Math.floor(Math.random() * items.length)]
    }
  }
  export namespace Random {
/**
 * `rInt` returns a random integer between `min` and `max` (inclusive).
 * @param [min=0] - The minimum number to return.
 * @param [max=9] - The maximum number to return.
 * @returns a random integer between the min and max values.
 */
    export const rInt = (min=0, max=9) => {
      return Math.max(min, Math.floor(Math.random()*max))
    }
  }
}
