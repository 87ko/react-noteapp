import axios from 'axios'
import { useAppDispatch } from '../app/hooks'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { setEditedContent } from '../features/contentSlice'
import { Content } from '../@types/types'
import { useNavigate } from 'react-router-dom'

export const useMutateTitle = () => {
	const dispatch = useAppDispatch()
	const queryClient = useQueryClient()

	const createContentMutation = useMutation(
		(content: Omit<Content, 'id'>) => axios.post<Content>(`${process.env.REACT_APP_API_URL}/content`, content),
		{
			onSuccess: (res) => {
				//Success
			},
			onError: (err) => {
				//Error
			},
		}
	)
}
