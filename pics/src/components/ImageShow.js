function ImageShow({ image }) {
    return <div>
        <img src={image.urls.small} alt={image.alt_description} />
    </div>;
}

export default ImageShow;



// 1 - apply a "key" to each element during the mapping step  -- esto lo hago yo
// 2 - after re-rendering, compare the keys on each ImageShow to the keys from the previous render --esto lo hace react
// 3 - apply minimal set of changes to existing DOM elements --esto lo hace react