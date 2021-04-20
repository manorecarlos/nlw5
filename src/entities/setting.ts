import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm";

import { v4 as uuid } from "uuid";

// Criando a entidade 
@Entity("settings")
class Setting {

  // Chave primária
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  // Verifica se o id está preenchido
  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}

// Exportando a entidade
export { Setting }