import { supabase } from '../supabaseClient.js'
import { CATEGORY_TYPES } from '../constants/categories.js'

export async function getCategoriesForUser(userId) {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .or(`user_id.eq.${userId},is_system.eq.true`)
    .order('name', { ascending: true })

  if (error) throw error
  return data
}

export async function createUserCategory(userId, category) {
  const { name, type, parent_id, icon, color } = category

  const { data, error } = await supabase
    .from('categories')
    .insert({
      user_id: userId,
      name,
      type,
      parent_id,
      icon,
      color,
      is_system: false,
    })
    .select('*')
    .single()

  if (error) throw error
  return data
}