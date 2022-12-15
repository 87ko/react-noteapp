import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import type { Content } from '../@types/types'

export const useQueryContents = (id: string) => {
	const getContent = async (id: string) => {
		const { data } = await axios.get<Content[]>(`${process.env.REACT_APP_API_URL}/contents/${id}`)
		return data
	}
	return useQuery<Content[], Error>({
		queryKey: ['single', id],
		queryFn: () => getContent(id),
		staleTime: Infinity,
	})
}
