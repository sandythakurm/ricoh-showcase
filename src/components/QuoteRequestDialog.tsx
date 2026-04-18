import { useState, ReactNode } from "react";
import { z } from "zod";
import { Mail, Send, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const SALES_EMAIL = "sales@bytes-me.com";

const quoteSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(30).optional(),
  company: z.string().trim().max(150).optional(),
  quantity: z.string().trim().max(20).optional(),
  message: z.string().trim().max(1500).optional(),
});

interface QuoteRequestDialogProps {
  productName?: string;
  trigger: ReactNode;
}

const QuoteRequestDialog = ({ productName, trigger }: QuoteRequestDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = quoteSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as string;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    const data = result.data;
    const subject = productName
      ? `Quote Request: ${productName}`
      : "Quote Request";

    const bodyLines = [
      `Hello,`,
      ``,
      `I would like to request a quote${productName ? ` for: ${productName}` : ""}.`,
      ``,
      `--- Contact Details ---`,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : null,
      data.company ? `Company: ${data.company}` : null,
      data.quantity ? `Quantity: ${data.quantity}` : null,
      ``,
      data.message ? `Message:\n${data.message}` : null,
      ``,
      `Thank you.`,
    ].filter(Boolean);

    const mailto = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;

    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Quote request ready",
        description: `Your email client has opened with the request to ${SALES_EMAIL}.`,
      });
      setOpen(false);
      setForm({ name: "", email: "", phone: "", company: "", quantity: "", message: "" });
    }, 600);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[520px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            Request a Quote
          </DialogTitle>
          <DialogDescription>
            {productName
              ? `Fill out the form for a quote on ${productName}. We'll reply shortly.`
              : "Fill out the form and our sales team will get back to you shortly."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="qr-name">Full Name *</Label>
              <Input
                id="qr-name"
                value={form.name}
                onChange={handleChange("name")}
                placeholder="John Doe"
                maxLength={100}
                required
              />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="qr-email">Email *</Label>
              <Input
                id="qr-email"
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                placeholder="you@company.com"
                maxLength={255}
                required
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="qr-phone">Phone</Label>
              <Input
                id="qr-phone"
                value={form.phone}
                onChange={handleChange("phone")}
                placeholder="+971 ..."
                maxLength={30}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="qr-company">Company</Label>
              <Input
                id="qr-company"
                value={form.company}
                onChange={handleChange("company")}
                placeholder="Your company"
                maxLength={150}
              />
            </div>
          </div>

          {productName && (
            <div className="space-y-1.5">
              <Label htmlFor="qr-quantity">Quantity</Label>
              <Input
                id="qr-quantity"
                value={form.quantity}
                onChange={handleChange("quantity")}
                placeholder="e.g. 5 units"
                maxLength={20}
              />
            </div>
          )}

          <div className="space-y-1.5">
            <Label htmlFor="qr-message">Message</Label>
            <Textarea
              id="qr-message"
              value={form.message}
              onChange={handleChange("message")}
              placeholder="Any additional details or requirements..."
              rows={4}
              maxLength={1500}
            />
          </div>

          {productName && (
            <div className="bg-secondary/40 border rounded-lg p-3 text-sm">
              <span className="text-muted-foreground">Product: </span>
              <span className="font-medium">{productName}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Send Quote Request
              </>
            )}
          </button>
          <p className="text-xs text-muted-foreground text-center">
            Your request will be sent to {SALES_EMAIL}
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteRequestDialog;
