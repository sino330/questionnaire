import { useForm,Controller } from "react-hook-form";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";

export default function Home() {
  const { register, handleSubmit,formState:{errors},control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Container>
        <h1>プログラミング学習に関するアンケート</h1>
        {/* Q1 */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Q1,名前を入力してください(匿名可)。</label>
            <Controller
              name="name"
              defaultValue=""
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input value={value} onChange={onChange} />
              )}
            />
          </div>
          {/* Q2 */}
          <div>
            <label htmlFor="birth">
              Q2,生年月日を入力してください。(例：19900101)
            </label>
            <Controller
              name="birth"
              defaultValue=""
              control={control}
              rules={{required: true,maxLength: 8,minLength: 8,pattern: /\d{4}\d{2}\d{2}/}}
              render={({field:{value,onChange}})=><Input value={value} onChange={onChange} />}
            />
            {errors.birth && errors.birth.type === "required" ? (
              <span>※this is required.</span>
            ) : null}
            {errors.birth && errors.birth.type === "pattern" ? (
              <span>Please enter a half-width 8-digit integer</span>
            ) : null}
          </div>
          {/* Q3 */}
          <div>
            <span>Q3,現在プログラミングを学習していますか？</span>
            <input
              id="isLearning1"
              {...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value="true"
            />
            <label htmlFor="isLearning">はい</label>
            <input
              id="isLearning2"
              {...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value="false"
            />
            <label htmlFor="isLearning">わからない</label>
            <input
              id="isLearning3"
              {...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value="null"
            />
            <label htmlFor="isLearning">わからない</label>
            {errors.isLearning && <span>※this is required.</span>}
          </div>
          {/* Q4 */}
          <div>
            <span>Q4,これまでにプログラミングを学習したことはありますか？</span>
            <input
              id="wasLearning1"
              {...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"
              value="true"
            />
            <label htmlFor="wasLearning">はい</label>
            <input
              id="wasLearning2"
              {...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"
              value="false"
            />
            <label htmlFor="wasLearning">いいえ</label>
            <input
              id="wasLearning3"
              {...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"
              value="null"
            />
            <label htmlFor="wasLearning">わからない</label>
            {errors.wasLearning && <span>※this is required.</span>}
          </div>
          <input type="submit" value="アンケートを提出する" />
        </form>
      </Container>
    </>
  );
}
