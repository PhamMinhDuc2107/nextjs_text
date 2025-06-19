interface IDepartment {
   id: number,
   name: string,
   parent_id: number| null,
   parent: object| null
}