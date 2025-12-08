export default function AuthForm({ title, buttonText }) {
return (
<div className="max-w-md mx-auto bg-[var(--bg-main)] p-10 rounded-xl shadow-xl">
<h2 className="text-2xl font-bold mb-6 text-[var(--text-primary)] text-center">{title}</h2>
<form className="flex flex-col gap-5">
<input type="email" placeholder="Email" className="p-3 rounded-lg bg-[var(--accent-soft)]" />
<input type="password" placeholder="Password" className="p-3 rounded-lg bg-[var(--accent-soft)]" />
<button className="bg-[var(--accent-strong)] text-white py-3 rounded-lg shadow-lg">{buttonText}</button>
</form>
</div>
);
}