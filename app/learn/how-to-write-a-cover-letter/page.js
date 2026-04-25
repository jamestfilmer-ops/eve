import Link from 'next/link'
import PaywallBlur from '../../components/PaywallBlur'
import LessonProgress from '../../components/LessonProgress'

export const metadata = {
  title: 'How to Write a Cover Letter for Short Story Submissions | Eve',
  description: 'The cover letter for a literary magazine submission is not a query letter. It is four sentences. Here is exactly what to write — and what not to write.',
}

export default function LessonCoverLetter() {
  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '16px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/learn" style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--text-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            All lessons
          </Link>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'var(--green-pale)', color: 'var(--green)', border: '1px solid var(--green-border)', padding: '3px 8px', borderRadius: '4px' }}>Short Fiction</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-soft)' }}>5 min</span>
            <LessonProgress slug="how-to-write-a-cover-letter" />
          </div>
        </div>
      </div>

      <section style={{ background: 'linear-gradient(160deg, #2D5016 0%, var(--green) 55%, #4a8a24 100%)', padding: '44px 24px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-up">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '16px' }}>
            How to write a cover letter
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', lineHeight: '1.75', color: 'rgba(255,255,255,0.75)', maxWidth: '560px' }}>
            For a short story submission, not a novel query. These are different documents. The cover letter is short on purpose.
          </p>
        </div>
      </section>

      <PaywallBlur>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '44px 24px 80px', fontFamily: 'var(--font-ui)' }}>

        <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '28px' }}>
          The single most common mistake writers make when submitting short fiction is confusing a cover letter with a query letter. A query letter — the document you send to a literary agent about a novel — is a pitch. It has a hook, a summary, comp titles, and a bio paragraph. It is trying to sell something. A cover letter to a literary magazine is not a pitch. The story is the pitch. The cover letter is an introduction, and it should be so brief that an editor can read it in ten seconds.
        </p>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px', marginBottom: '36px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '16px' }}>The standard cover letter — four sentences</p>
          <p style={{ fontSize: '15px', lineHeight: '1.9', color: 'var(--text-dark)', margin: 0 }}>
            Dear [Editor&apos;s name],<br /><br />
            I am submitting my short story &ldquo;[Title]&rdquo; ([word count] words) for your consideration.<br /><br />
            [One sentence bio: relevant credentials only. If you have none, skip this sentence entirely.]<br /><br />
            Thank you for your time.<br /><br />
            [Your name]
          </p>
        </div>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          That is the entire document. Nothing else belongs in it. The cover letter is not the place to summarize the story, explain your intentions, describe the themes, or tell the editor why you wrote it. If any of those things are necessary for the story to be understood, the story is not finished.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          What belongs in the bio sentence
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Relevant publishing credits: short fiction published in magazines or journals, especially recognizable ones. Previous books. Professional background that is directly relevant to the material — a marine biologist writing a story about the ocean, a lawyer writing about a trial. That is it. Do not include: your day job unless it is directly relevant, your education unless it is an MFA or PhD in a relevant field, the fact that your friends loved this story, awards you won in high school, or how long you have been writing.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          If you have no publishing credits and no directly relevant professional background, skip the bio sentence. A cover letter with no bio and no credentials reads as a new writer, which is fine. A cover letter with a padded bio that signals you are reaching reads as someone who does not know the conventions, which is not fine.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          What does not belong
        </h2>

        {[
          { label: 'A summary of the story', why: 'The editor is about to read the story. They do not need a summary. If you feel the story needs a summary to make sense, it has a structural problem.' },
          { label: 'An explanation of the themes', why: '"This story explores themes of grief and identity" tells the editor that you do not trust your own writing to communicate what it is about. It also implies the story may not do it without the explanation.' },
          { label: 'Why you wrote it', why: '"I wrote this after my father passed away" is personal and sincere. It also has no bearing on whether the story is any good and can read as an attempt to generate sympathy rather than earn it.' },
          { label: '"I know you usually publish X, but this story..."', why: 'Never apologize for submitting. If you have done your research, you believe the story is right for this magazine. Submit it. If you are not sure it is right for them, do more research or find a different market.' },
          { label: 'Rhetorical questions or hooks', why: '"What would you do if you woke up and everything you knew was wrong?" is a marketing line. Cover letters are not marketing copy. They are introductions. Keep them flat.' },
          { label: 'Flattery about the magazine', why: '"I have been a devoted reader of your magazine for years and it would be an honor..." takes up space that should be empty. It reads as filler. Editors know you want to be published in their magazine. That is why you submitted.' },
        ].map((item, i) => (
          <div key={i} style={{ borderLeft: '3px solid var(--border)', paddingLeft: '20px', marginBottom: '20px' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '6px' }}>{item.label}</p>
            <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-mid)', margin: 0 }}>{item.why}</p>
          </div>
        ))}

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          Using the editor&apos;s name
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          Use the editor&apos;s name if you can find it. Most magazines list their editorial staff. If the submission goes to a general submissions inbox and no editor is named, &ldquo;Dear Editors&rdquo; or &ldquo;Dear Fiction Editors&rdquo; is fine. &ldquo;To Whom It May Concern&rdquo; sounds like a legal document. &ldquo;Dear Sir or Madam&rdquo; is from 1987. Avoid both.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px', marginTop: '44px' }}>
          Simultaneous submissions
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-mid)', marginBottom: '24px' }}>
          If the magazine accepts simultaneous submissions and you are submitting the same story elsewhere at the same time, you do not need to say so in the cover letter. It is standard practice where accepted. What you must do is withdraw immediately if the story is accepted elsewhere — log back into Submittable and withdraw the submission the same day. Failure to withdraw accepted work promptly damages your reputation with the editors you did not notify.
        </p>

        <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-border)', borderRadius: '12px', padding: '20px 24px', marginTop: '36px', marginBottom: '36px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '12px' }}>The rule</p>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--text-dark)', margin: 0 }}>
            A cover letter that does not distract from the story is a good cover letter. The goal is to give the editor the minimum necessary information and then get out of the way. Your job in the cover letter is to not give them a reason to stop reading before they reach the story.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
          <Link href="/learn/short-story-markets" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>
            &larr; Where to submit
          </Link>
          <Link href="/road-to-short-story" style={{ fontSize: '13px', color: 'var(--green)', textDecoration: 'none' }}>
            Road to Short Story &rarr;
          </Link>
        </div>
      </div>
      </PaywallBlur>
    </div>
  )
}
