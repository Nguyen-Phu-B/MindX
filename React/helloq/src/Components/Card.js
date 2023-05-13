export default function Card({ image, title, decription }) {
    return (
        <div class="column-grid">
            <span class="icon-container icon-big">
                <img
                    class="ct-img"
                    src={image}
                    data-src= {image}></img>
            </span>
            <p class="tiltle">{title}</p>
            <p class="decription">{decription}</p>
        </div>
    )
}