export class UrlBuilder {
    public constructor(private baseUrl: string) {
    }

    public build(queryParams?: Record<string, string | number>): string {
        const url = new URL(this.baseUrl);

        if (queryParams) {
            Object.entries(queryParams).forEach(([key, value]) => {
                url.searchParams.append(key, value.toString());
            });
        }

        return url.toString();
    }
}