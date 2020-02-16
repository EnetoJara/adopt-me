import { commentsFactory } from "./comments-model";
import { dbConfig } from "./driver";
import { googleInfoFactory } from "./google-info";
import { kindsFactory } from "./kinds-model";
import { petsFactory } from "./pets-model";
import { userFactory } from "./user-model";
import { userAdoptsFActory } from "./users-adopts";

export const UserGoogle = googleInfoFactory(dbConfig);
export const User = userFactory(dbConfig);
export const Pets = petsFactory(dbConfig);
export const Kinds = kindsFactory(dbConfig);
export const Comments = commentsFactory(dbConfig);
export const UserAdopt = userAdoptsFActory(dbConfig);

Pets.belongsTo(Kinds, { as: "kind", foreignKey: "kindId" });
User.belongsTo(UserGoogle, { as: "google", foreignKey: "googleId" });

UserAdopt.belongsTo(Pets, { as: "petId", foreignKey: "pet" });
UserAdopt.belongsTo(User, { as: "userId1", foreignKey: "old_owner" });
UserAdopt.belongsTo(User, { as: "userId2", foreignKey: "new_owner" });

export { dbConfig };
