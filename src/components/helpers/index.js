// function to get saving
export const getSaving = (regularPrice, salePrice) => {
    const cashSaving = Math.round(
        ((regularPrice - salePrice) / regularPrice) * 100
    );
    return cashSaving;
};