import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import type { Content } from '../@types/types'

export const useQueryContents = () => {
	const getContents = async () => {
		const { data } = await axios.get<Content[]>(`${process.env.REACT_APP_API_URL}/contents`)
		return data
	}
	return useQuery<Content[], Error>({
		queryKey: 'contents',
		queryFn: getContents,
		staleTime: Infinity,
	})
}
