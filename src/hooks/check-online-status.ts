import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useCheckOnlineStatus(healthChecks: string[]) {
    return useQuery({
        queryKey: ["checkOnlineStatus", ...healthChecks],
        queryFn: async () => {
            try {
                // small delay to avoid flicker
                await new Promise((r) => setTimeout(r, 1000));

                if (healthChecks.length === 0) {
                    return true;

                }
                const results = await Promise.all(healthChecks.map(async (url) => {
                    try {
                        const response = await axios.get(url, {
                            timeout: 5000,
                            validateStatus: () => true,
                        });

                        return response.status >= 200 && response.status < 400;
                    }
                    catch {
                        return false;
                    }
                }));

                return results.every((status) => status === true);
            }
            catch {
                return false;
            }
        },
        staleTime: 60000,
    });
}
