

/**
 * Elimina y retorna la ultima carta
 * @param {Array<string>} deck es un arreglo de string
 * @returns {string} Retorna una carta
 */
export const pedirCarta = ( deck ) => {

    if( !deck || deck.length === 0 ){
        throw 'No hay cartas en el deck';
    }
    
    return deck.pop();
}