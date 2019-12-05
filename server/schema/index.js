import Joi from '@hapi/joi'

// ------ Cards ------

const CardType = {
  Feature: 'feature',
  BugFix: 'bugFix',
  Update: 'update',
  Research: 'research',
  Content: 'content'
}

export const cardSchema = Joi.object({
  id: Joi.string(),
  index: Joi.number(),
  type: Joi.string().valid(
    CardType.Feature,
    CardType.BugFix,
    CardType.Update,
    CardType.Research,
    CardType.Content
  ),
  duration: Joi.number(),
  severity: Joi.string().valid('hight', 'medium', 'low'),
  TaskListId: Joi.string()
}).label('Card')

// ------ TaskList ------

export const taskListSchema = Joi.object({
  id: Joi.string(),
  name: Joi.string(),
  Cards: Joi.array().items(cardSchema)
}).label('TaskList')

// ------ Board ------

export const boardSchema = Joi.object({
  id: Joi.string(),
  name: Joi.string(),
  TaskLists: Joi.array().items(taskListSchema)
}).label('Board')
