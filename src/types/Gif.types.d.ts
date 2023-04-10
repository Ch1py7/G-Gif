export namespace GifTypes {
	export interface Data {
		username: string
		id: string
		images: Images
	}

	export interface Images {
		downsized_medium: Downsized_medium
	}

	export interface Downsized_medium {
		url: string
	}
}
