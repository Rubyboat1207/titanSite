<script lang="ts">
    export let color: string;

    function hexToRGB(hex: string) {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return [r, g, b];
    }

    // Scale RGB values to the range of 0 to 1
    function scaleRGB(rgb: number[]) {
        return rgb.map(val => val / 255);
    }

    // Update the feColorMatrix
    const rgb = hexToRGB(color);
    const scaledRGB = scaleRGB(rgb);
    console.log(scaledRGB)
</script>

<svg
    width="134"
    height="150"
    viewBox="0 0 134 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <g filter="url(#filter0_d_102_7)">
        <path
            d="M108.451 14.3641H25.395C19.3546 14.3641 14.0692 19.6423 14.0692 25.6746V123.699C14.0692 129.731 19.3546 135.009 25.395 135.009H108.451C114.492 135.009 119.777 129.731 119.777 123.699V25.6746C119.777 19.6423 114.492 14.3641 108.451 14.3641ZM44.2715 116.913C44.2715 118.421 42.7614 119.929 41.2513 119.929H32.1906C30.6804 119.929 29.1703 118.421 29.1703 116.913V107.864C29.1703 106.356 30.6804 104.848 32.1906 104.848H41.2513C42.7614 104.848 44.2715 106.356 44.2715 107.864V116.913ZM44.2715 86.7512C44.2715 88.2593 42.7614 89.7674 41.2513 89.7674H32.1906C30.6804 89.7674 29.1703 88.2593 29.1703 86.7512V77.7028C29.1703 76.1948 30.6804 74.6867 32.1906 74.6867H41.2513C42.7614 74.6867 44.2715 76.1948 44.2715 77.7028V86.7512ZM74.4738 116.913C74.4738 118.421 72.9637 119.929 71.4536 119.929H62.3929C60.8828 119.929 59.3727 118.421 59.3727 116.913V107.864C59.3727 106.356 60.8828 104.848 62.3929 104.848H71.4536C72.9637 104.848 74.4738 106.356 74.4738 107.864V116.913ZM74.4738 86.7512C74.4738 88.2593 72.9637 89.7674 71.4536 89.7674H62.3929C60.8828 89.7674 59.3727 88.2593 59.3727 86.7512V77.7028C59.3727 76.1948 60.8828 74.6867 62.3929 74.6867H71.4536C72.9637 74.6867 74.4738 76.1948 74.4738 77.7028V86.7512ZM104.676 116.913C104.676 118.421 103.166 119.929 101.656 119.929H92.5953C91.0851 119.929 89.575 118.421 89.575 116.913V77.7028C89.575 76.1948 91.0851 74.6867 92.5953 74.6867H101.656C103.166 74.6867 104.676 76.1948 104.676 77.7028V116.913ZM104.676 56.5899C104.676 58.098 103.166 59.606 101.656 59.606H32.1906C30.6804 59.606 29.1703 58.098 29.1703 56.5899V32.4609C29.1703 30.9528 30.6804 29.4447 32.1906 29.4447H101.656C103.166 29.4447 104.676 30.9528 104.676 32.4609V56.5899Z"
            fill={color}
        />
    </g>
    <defs>
        <filter
            id="filter0_d_102_7"
            x="0.0691528"
            y="0.364075"
            width="133.708"
            height="148.645"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
        >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="7" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
                type="matrix"
                values="0 0 0 0 {scaledRGB[0]} 0 0 0 0 {scaledRGB[1]} 0 0 0 0 {scaledRGB[2]} 0 0 0 0.3 0"
            />
            <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_102_7"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_102_7"
                result="shape"
            />
        </filter>
    </defs>
</svg>
