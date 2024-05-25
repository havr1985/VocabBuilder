
export function creatArray(perPage:number) {
    const array:number[] = [];
    for (let i = 1; i <= perPage; i++) {
      array.push(i);
    }
    return array;
}